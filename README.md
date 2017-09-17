# Express with Auth[entication]

## A JavaScript web app that enables you to get authentication and authorization running fast.

### This package has the best JavaScript security. Take a nap because you can rest easy. Awe, you're so cute when your sleeping...

Before following the getting started documentation you will need to clone the repository to your computer.

# Getting Started

## Step 1 - Install Dependencies
This is a node package with many dependencies. Assuming you have node installed run the following command whilst inside your projects root directory

`npm install`

## Step 2 - Create a Database

For this package to work out of the box you will want to name your database exampledb. If you want to change that name look in the root of the package for a file called knexfile.js. Inside that you will see the path to postgresql://localhost/exampledb. Change that to whatver your heart desires. The command you will use to create the db will look like this.

`createdb exampledb`

## Step 3 - Migrate & Seed Database

![](public/home/assets/erd.png)

All the migration and seed files are read to go so all you have to do is run the commands below. Below is a ERD diagram of how the schema will be laid out unless you change it before running the commands

`knex migrate:latest`
`knex seed:run`
