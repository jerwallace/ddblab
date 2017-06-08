# DynamoDB Lab: Product API

In this lab we will create a simple product API using DynamoDB and AWS Lambda.

## Prerequsites

First, make sure the AWS CLI is installed on your machine and you have configured the default profile to point to the account you will be using in todays lab.

You can do this in the file: ~/.aws/credentials on a mac

## Create the DynamoDB Table

1. Open the DynamoDB console at https://console.aws.amazon.com/dynamodb/.
2. Choose Create Table.
4. In the Create DynamoDB table screen, set the *Table* name field to **ProductCatalog**.
5. Next, for the Primary key, in the *Partition key* field, type **Id**. Set the data type to Number.
6. Once complete, choose Create.

## Load the example records

1. Download the Sample Data File Archive
2. Download the sample data archive (sampledata.zip) using this link: [sampledata.zip](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/samples/sampledata.zip)
3. Extract the .json data files from the archive.
4. Copy the .json data files to your current directory.
5. Run the following command in the directory:

    ```
    aws dynamodb batch-write-item --request-items file://ProductCatalog.json --return-consumed-capacity TOTAL
    ```
## Create the Lambda function.

1. Open the Lambda console and click the **Create a Lambda Function** button.
2. Filter for "DynamoDB" blueprints. There are multiple **microservice-http-endpoint** blueprints in different languages. Pick the one that you are most comfortable with.  
3. On the triggers page, set Security to **Open**. Click **Next**. *Note: We would normally want to lock down this down with a custom authorizer in API Gateway, however for today's lab we will leave it open.*
4. Name the function **ProductService**.
5. Scroll down (leave code as-is) and create a new role from templates with DynamoDB access.
6. For the IAM role, select **Create a new role**. A pop-up will appear. From the dropdown menu, select **Create Role**. Copy and paste the following policy:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ProductAPIAllAccess",
            "Effect": "Allow",
            "Action": [
                "dynamodb:*"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:<ACCOUNT_ID>:table/ProductCatalog"
        }
    ]
}
```
7. Create the role and return to the Lambda console. Click **Next** and create the lambda function with the endpoint.

## Test the endpoint

The default configuration of the endpoint is to run a SCAN operation on the DynamoDB table. Run a GET request with the parameter https://API_GATEWAY_URL_HERE?TableName=ProductCatalog. It will return the entire list of products.

Next, lets see how much read capacity is consumed with each operation. Why is it the value that is represented?
```
aws dynamodb scan --table-name ProductCatalog --return-consumed-capacity TOTAL
```
## Next Steps

- Once you have completed this section, run the same load commands for some other datasets [here](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SampleData.CreateTables.html).
- Try setting up a **Global Secondary Index** on the **ProductCatalog** table
- Run a few queries via the AWS CLI tool. In particular, add the flag "--return-consumed-capacity" to see how many Read or Write units are consumed during your action. Try a query operation and note the difference from a scan operation.
  - [Working with Queries](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html)
  - [Working with Items](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html)

## Resources

- [Example applications for each programming language](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/Welcome.html)
- [Loading Sample Data](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SampleData.CreateTables.html)
