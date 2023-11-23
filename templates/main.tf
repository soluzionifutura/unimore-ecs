terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

variable "region" {
  description = "The AWS region to create resources in."
}

variable "ami" {
  description = "The AMI to use for the instance."
}

variable "instance_type" {
  description = "The type of instance to start."
}

variable "subnet_id" {
  description = "The VPC Subnet ID to launch in."
}

variable "instance_name" {
  description = "The name tag of the instance."
  default     = "ec2-unimore-terraform"
}

provider "aws" {
  region = var.region
}

resource "aws_instance" "my_instance" {
  ami           = var.ami
  instance_type = var.instance_type
  subnet_id     = var.subnet_id

  tags = {
    Name = var.instance_name
  }
}
