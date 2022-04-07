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
                            
                            sh 'npm run chrome'
                            echo "__________Combining Reports___________"
                            sh 'npm run combine-reports'
                            echo "__________Generating Reports___________"
                            sh 'npm run generate-report'

                        }
                        else
                        {
                            sh 'npm run firefox'
                            echo "__________Combining Reports___________"
                            sh 'npm run combine-reports'
                            echo "__________Generating Reports___________"
                            sh 'npm run generate-report'
                        }

                    }
                }

        }

    }
}