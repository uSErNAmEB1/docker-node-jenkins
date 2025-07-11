pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
              git branch: 'main', url: 'https://github.com/uSErNAmEB1/docker-node-jenkins.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker rm -f node_container || true'
                sh 'docker run -d --name node_container -p 3000:3000 node-app'
            }
        }
    }
}
