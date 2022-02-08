# Setup Instructions

## 1.) Run `npm install`


## 2.) Install amplify cli `npm install -g @aws-amplify/cli`

## 3.) Run `amplify configure` to configure amplify resources through the AWS console with correct github repository

## 4.) Copy over access key and secret from console to the amplify cli

## 5.) Run `amplify init` using the default options

## 6.) Add authentication by running `amplify add auth` and go with the default options

## 7.) Add storage by running `amplify add storage` and select the first option to store media

## 8.) Upload all changes with `amplify push` (this will take a few minutes)

## 9.) Update configs with correct values in `configs/aws_configs.json`
