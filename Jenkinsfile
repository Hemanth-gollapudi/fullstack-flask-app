pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/<your-username>/<your-repo>.git'
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
                    bat "docker stop frontend || true"
                    bat "docker rm frontend || true"
                    bat "docker stop backend || true"
                    bat "docker rm backend || true"

                    bat "docker run -d -p 5000:5000 --name backend fullstack-backend"
                    bat "docker run -d -p 8080:80 --name frontend fullstack-frontend"
                }
            }
        }
    }
}
