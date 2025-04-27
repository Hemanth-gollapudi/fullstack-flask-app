pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/Hemanth-gollapudi/fullstack-flask-app.git'
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
                    bat "docker stop frontend || exit 0"
                    bat "docker rm frontend || exit 0"
                    bat "docker stop backend || exit 0"
                    bat "docker rm backend || exit 0"

                    bat "docker run -d -p 5000:5000 --name backend fullstack-backend"
                    bat "docker run -d -p 8080:80 --name frontend fullstack-frontend"
                }
            }
        }
    }
}
