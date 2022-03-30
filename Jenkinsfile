pipeline{
    agent any
    tools {nodejs "node-test"}
    stages{

        stage('Build') {
            steps {                
                echo "================ Building ================="

                        sh 'npm run test'
                    }
        }

    }
}