# Corso Cloud UniMoRE

Questa repo contiene:

- Applicazione d'esempio Node.js (server HTTP)
- Dockerfile e buildspec per CodePipeline + CodeBuild + ECS
- Template di CloudFormation e application di CDK per lanciare un'istanza EC2 d'esempio

Per il deployment dell'applicazione di CDK è necessario:

- Installare la [CLI di AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Configurare la CLI di AWS con `aws configure`
- Installare [CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
- Creare un file di configurazione `config.json` (`cp config.json.sample config.json` e inserisci i valori appropriati per l'account)
- Lanciare `npm run deploy-cdk` per creare lo stack, `npm run destroy-cdk` per distruggerlo

Per il deployment tramite Terraform è necessario:

- Installare la [CLI di AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Configurare la CLI di AWS con `aws configure`
- Installare [Terraform](https://developer.hashicorp.com/terraform/install)
- Creare un file di configurazione `terraform.tfvars` (`cp terraform.tfvars.sample terraform.tfvars` e inserisci i valori appropriati per l'account)
- Da dentro la directory `templates`, lanciare `terraform init` e poi `terraform apply` rer creare lo stack, `terraform destroy` per distruggerlo

Per il deployment tramite branch deploy:

- Creare un nuovo branch
- Aprire una PR dal nuovo branch a main
- Il deployment viene eseguito ad ogni push sul branch

## Documentazione

- [Branch deploy GitHub Action](https://github.com/aws-actions/aws-cloudformation-github-deploy)
