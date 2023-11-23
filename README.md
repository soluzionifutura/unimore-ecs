# Corso Cloud UniMoRE

Questa repo contiene:

- Applicazione d'esempio Node.js (server HTTP)
- Dockerfile e buildspec per CodePipeline + CodeBuild + ECS
- Template di CloudFormation e application di CDK per lanciare un'istanza EC2 d'esempio

Per il deployment dell'applicazione di CDK è necessario:

- Installare la [CLI di AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Configurare la CLI di AWS con `aws configure`
- Creare un file di configurazione `config.json` (`cp config.json.sample config.json` e inserisci i valori appropriati per l'account)
- Lanciare `npm run deploy-cdk` per creare lo stack, `npm run destroy-cdk` per distruggerlo
