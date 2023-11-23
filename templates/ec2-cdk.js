const cdk = require("aws-cdk-lib")
const ec2 = require("aws-cdk-lib").aws_ec2


const { VPC_ID, AZ, SUBNET, ROUTE_TABLE_ID } = require("../config.json")


INSTANCE_NAME = "ec2-test-unimore"

class Ec2InstanceStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props)

    const instance = new ec2.Instance(this, INSTANCE_NAME, {
      "vpc": ec2.Vpc.fromVpcAttributes(this, "VPC", {
        "vpcId": VPC_ID,
        "availabilityZones": [ AZ ],
        "publicSubnetIds": [ SUBNET ],
        "publicSubnetRouteTableIds": [ ROUTE_TABLE_ID ]
      }),
      "instanceType": ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.MICRO),
      "machineImage": new ec2.AmazonLinuxImage({ "generation": ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 })
    })
  }
}

const app = new cdk.App()
new Ec2InstanceStack(app, "unimore-ec2-cdk")