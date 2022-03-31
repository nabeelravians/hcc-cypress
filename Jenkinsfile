pipeline{
    agent any
    tools {nodejs "node-test"}
    stages{

        stage('Build') {
            steps {
                echo "================ Building ================="
                script { 
                       echo "Running it on {$params.Browser} "
                        if(params.Browser=="Chrome")
                        {
                            
                            sh 'npm run reportChrome'

                        }
                        else
                        {
                            sh 'npm run reportFirefox'
                        }

                    }
                }

        }

    }
}