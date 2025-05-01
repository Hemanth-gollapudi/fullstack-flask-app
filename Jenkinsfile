// pipeline {
//     agent any

//     stages {
//         stage('Clone Repository') {
//             steps {
//                 git branch: 'main',
//                 url: 'https://github.com/Hemanth-gollapudi/fullstack-flask-app.git'
                
//             }
//         }

//         stage('Clean Old Containers and Images') {
//             steps {
//                 script {
//                     bat "docker stop frontend || exit 0"
//                     bat "docker rm frontend || exit 0"
//                     bat "docker stop backend || exit 0"
//                     bat "docker rm backend || exit 0"

//                     bat "docker rmi -f fullstack-frontend || exit 0"
//                     bat "docker rmi -f fullstack-backend || exit 0"
//                 }
//             }
//         }

//         stage('Build Backend Image') {
//             steps {
//                 script {
//                     docker.build("fullstack-backend", "./backend")
//                 }
//             }
//         }

//         stage('Build Frontend Image') {
//             steps {
//                 script {
//                     docker.build("fullstack-frontend", "./frontend")
//                 }
//             }
//         }

//         stage('Run Containers') {
//             steps {
//                 script {
//                     bat "docker run -d -p 9000:9000 --name backend fullstack-backend"

//                     bat "docker run -d -p 9090:80 --name frontend fullstack-frontend"
//                 }
//             }
//         }
//     }
// }

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
                    sh '''
                        docker stop frontend || true
                        docker rm frontend || true
                        docker stop backend || true
                        docker rm backend || true

                        docker rmi -f fullstack-frontend || true
                        docker rmi -f fullstack-backend || true
                    '''
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                script {
                    sh 'docker build --no-cache -t fullstack-backend ./backend'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                script {
                    sh 'docker build --no-cache -t fullstack-frontend ./frontend'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh '''
                        docker run -d -p 9000:9000 --name backend fullstack-backend
                        docker run -d -p 9090:80 --name frontend fullstack-frontend
                    '''
                }
            }
        }
    }
}
