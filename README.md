# postman-k6
How to handle k6 and postman for complete load testing                                                                                                        
Step 1: install k6 either using windows k6 manager(windows) or brew install k6 (macbook)                                                                                                                                   
Step 2: Open Postman collection and export and store Collection.json and Environment.json in a folder                                                        

Step 3:Install the postman-to-k6 tool:                                                                                                                     
The postman-to-k6 tool is developed to help you convert the requests inside your Postman collections to k6 scripts, which are actually JavaScript code.
$ npm install -g @apideck/postman-to-k6                                                                                                                      
Step 4:Convert your exported Postman collection to k6 script:
Assuming your exported collection is named test-api.json, you can run this command to convert it to a k6 script. The env.json includes all your environment variables that are exported from Postman.           
$ postman-to-k6 test-api.json -e env.json -o k6-script.js                                                                                                    
Step 5: run k6 using k6 run k6-script.js
gather Report 
<img width="1728" alt="Screenshot 2023-02-23 at 4 44 35 PM" src="https://user-images.githubusercontent.com/89374501/220891212-244d4c53-55ce-4d98-baca-88dbb7ef90e9.png">
