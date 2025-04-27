pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Hemanth-gollapudi/fullstack-flask-app.git'
                
            }
        }

        stage('Clean Old Containers and Images') {
            steps {
                script {
                    // Stop and remove existing containers if any
                    bat "docker stop frontend || true"
                    bat "docker rm frontend || true"
                    bat "docker stop backend || true"
                    bat "docker rm backend || true"

                    // Remove old images if exist
                    bat "docker rmi -f fullstack-frontend || true"
                    bat "docker rmi -f fullstack-backend || true"
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                script {
                    docker.build("fullstack-backend", "./backend")
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                script {
                    docker.build("fullstack-frontend", "./frontend")
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    bat "docker run -d -p 9000:9000 --name backend fullstack-backend"

                    bat "docker run -d -p 9090:80 --name frontend fullstack-frontend"
                }
            }
        }
    }
}
