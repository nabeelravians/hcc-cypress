pipeline{
    agent any
    stages{

        stage('Build') {
            steps {                
                echo "================ Building ================="

                        sh 'npm run test'
                    }
        }

    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}