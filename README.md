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

## 10.) From teh aws amplify console, under the `Rewrites and redirects` tab add a redirect of `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf)$)([^.]+$)/>` to `/index.html` to enable routing

## 11.)  Add bucket policy to created bucket
```{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Principal" "*",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/public/*",
                "arn:aws:s3:::{enter bucket name}/protected/${cognito-identity.amazonaws.com:sub}/*",
                "arn:aws:s3:::{enter bucket name}/private/${cognito-identity.amazonaws.com:sub}/*"
            ],
            "Effect": "Allow"
        },
        {"Principal" "*",
            "Action": [
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/uploads/*"
            ],
            "Effect": "Allow"
        },
        {"Principal" "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/protected/*"
            ],
            "Effect": "Allow"
        },
        {"Principal" "*",
            "Condition": {
                "StringLike": {
                    "s3:prefix": [
                        "public/",
                        "public/*",
                        "protected/",
                        "protected/*",
                        "private/${cognito-identity.amazonaws.com:sub}/",
                        "private/${cognito-identity.amazonaws.com:sub}/*"
                    ]
                }
            },"Principal" "*",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}"
            ],
            "Effect": "Allow"
        }
    ]
}```
