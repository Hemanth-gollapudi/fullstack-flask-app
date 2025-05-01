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

        stage('Run Backend API Test') {
            steps {
                script {
                    sh '''
                        echo "🔧 Building backend image for testing..."
                        docker build --no-cache -t test-backend ./backend

                        echo "🚀 Running temporary test backend container..."
                        docker run -d -p 9000:9000 --name test-backend test-backend

                        echo "⏳ Waiting for backend to start..."
                        sleep 5

                        echo "🧪 Running API test (test/test_front.py)..."
                        python3 test/test_front.py

                        echo "🧼 Cleaning up test container..."
                        docker stop test-backend
                        docker rm test-backend
                    '''
                }
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

        stage('Run Final Containers') {
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
