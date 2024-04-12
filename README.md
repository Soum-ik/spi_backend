## SPI Backend

{
	"info": {
		"_postman_id": "332f7fbd-62a2-43cb-b6fa-d98970634a03",
		"name": "SPI_backend",
		"description": "# 🚀 Get started here\n\nThis template guides you through CRUD operations (GET, POST, PUT, DELETE), variables, and tests.\n\n## 🔖 **How to use this template**\n\n#### **Step 1: Send requests**\n\nRESTful APIs allow you to perform CRUD operations using the POST, GET, PUT, and DELETE HTTP methods.\n\nThis collection contains each of these [request](https://learning.postman.com/docs/sending-requests/requests/) types. Open each request and click \"Send\" to see what happens.\n\n#### **Step 2: View responses**\n\nObserve the response tab for status code (200 OK), response time, and size.\n\n#### **Step 3: Send new Body data**\n\nUpdate or add new data in \"Body\" in the POST request. Typically, Body data is also used in PUT request.\n\n```\n{\n    \"name\": \"Add your name in the body\"\n}\n\n ```\n\n#### **Step 4: Update the variable**\n\nVariables enable you to store and reuse values in Postman. We have created a [variable](https://learning.postman.com/docs/sending-requests/variables/) called `base_url` with the sample request [https://postman-api-learner.glitch.me](https://postman-api-learner.glitch.me). Replace it with your API endpoint to customize this collection.\n\n#### **Step 5: Add tests in the \"Tests\" tab**\n\nTests help you confirm that your API is working as expected. You can write test scripts in JavaScript and view the output in the \"Test Results\" tab.\n\n<img src=\"https://content.pstmn.io/b5f280a7-4b09-48ec-857f-0a7ed99d7ef8/U2NyZWVuc2hvdCAyMDIzLTAzLTI3IGF0IDkuNDcuMjggUE0ucG5n\">\n\n## 💪 Pro tips\n\n- Use folders to group related requests and organize the collection.\n- Add more [scripts](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/) in \"Tests\" to verify if the API works as expected and execute workflows.\n    \n\n## 💡Related templates\n\n[API testing basics](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9a37a28-055b-49cd-8c7e-97494a21eb54&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  \n[API documentation](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9c28f47-1253-44af-a2f3-20dce4da1f18&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  \n[Authorization methods](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=31a9a6ed-4cdf-4ced-984c-d12c9aec1c27&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "31390767"
	},
	"item": [
		{
			"name": "Teacher",
			"item": [
				{
					"name": "Teacher delete",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful DELETE request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/teacher/delete/6618364446beaa0ff9988707",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"teacher",
								"delete",
								"6618364446beaa0ff9988707"
							]
						},
						"description": "This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code."
					},
					"response": []
				},
				{
					"name": "Teacher create",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful POST request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 201]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						},
						{
							"listen": "prerequest",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"soumik\",\n    \"department\": \"s\",\n    \"fatherName\": \"s\",\n    \"motherName\": \"s\",\n    \"gender\": \"s\",\n    \"address\": \"s\",\n    \"image\": \"s\",\n    \"shortDesc\": \"s\",\n    \"email\": \"s\",\n    \"phoneNumber\": \"s\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/teacher/create",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"teacher",
								"create"
							]
						},
						"description": "This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.\n\nA successful POST request typically returns a `200 OK` or `201 Created` response code."
					},
					"response": []
				},
				{
					"name": "Teacher get",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 200\", function () {",
									"    pm.response.to.have.status(200);",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:6969/api/teacher/get",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"teacher",
								"get"
							]
						},
						"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
					},
					"response": []
				},
				{
					"name": "Teacher update",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful PUT request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						},
						{
							"listen": "prerequest",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"hello world\",\n    \"department\": \"s\",\n    \"fatherName\": \"s\",\n    \"motherName\": \"s\",\n    \"gender\": \"s\",\n    \"address\": \"s\",\n    \"image\": \"s\",\n    \"shortDesc\": \"s\",\n    \"email\": \"s\",\n    \"phoneNumber\": \"s\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/teacher/update/6618b98aea7ebe44f3ea3116",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"teacher",
								"update",
								"6618b98aea7ebe44f3ea3116"
							]
						},
						"description": "This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code."
					},
					"response": []
				},
				{
					"name": "Teacher get by name",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Response status code is 200\", function () {",
									"  pm.response.to.have.status(200);",
									"});",
									"",
									"",
									"pm.test(\"Email is in a valid format\", function () {",
									"    const responseData = pm.response.json();",
									"",
									"    pm.expect(responseData).to.be.an('object');",
									"    pm.expect(responseData.data.email).to.match(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/, \"Email is not in a valid format\");",
									"});",
									"",
									"",
									"pm.test(\"Phone number is in a valid format\", function () {",
									"  const responseData = pm.response.json();",
									"",
									"  pm.expect(responseData.phoneNumber).to.match(/^\\+\\d{1,3}-\\d{1,14}$/);",
									"});",
									"",
									"",
									"pm.test(\"CreatedAt field is in a valid date format\", function () {",
									"    const responseData = pm.response.json();",
									"    ",
									"    pm.expect(responseData).to.be.an('object');",
									"    pm.expect(responseData.createdAt).to.match(/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$/, \"CreatedAt field should be in a valid date format\");",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/teacher/one/soumik",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"teacher",
								"one",
								"soumik"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Notic",
			"item": [
				{
					"name": "Notic Delete",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful DELETE request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/notic/delete/6618bc753f336a6d779a2ae1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"notic",
								"delete",
								"6618bc753f336a6d779a2ae1"
							]
						},
						"description": "This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code."
					},
					"response": []
				},
				{
					"name": "Notic Create",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful POST request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 201]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						},
						{
							"listen": "prerequest",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"notic_name\": \"festival\",\n    \"details\": \"Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959\",\n    \"date\": \"12 jun 2003\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/notic/create",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"notic",
								"create"
							]
						},
						"description": "This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.\n\nA successful POST request typically returns a `200 OK` or `201 Created` response code."
					},
					"response": []
				},
				{
					"name": "Notic get",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 200\", function () {",
									"    pm.response.to.have.status(200);",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:6969/api/notic/get",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"notic",
								"get"
							]
						},
						"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
					},
					"response": []
				},
				{
					"name": "Notic Update",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful PUT request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						},
						{
							"listen": "prerequest",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"notic_name\": \"festival\",\n    \"details\": \"ajkdfhjks\",\n    \"date\": \"12  2003\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/notic/update/6618bca23f336a6d779a2aeb",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"notic",
								"update",
								"6618bca23f336a6d779a2aeb"
							]
						},
						"description": "This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code."
					},
					"response": []
				},
				{
					"name": "Notic Get by name",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Response status code is 200\", function () {",
									"  pm.response.to.have.status(200);",
									"});",
									"",
									"",
									"pm.test(\"Content-Type header is 'application/json'\", function () {",
									"  pm.expect(pm.response.headers.get(\"Content-Type\")).to.equal(\"application/json\");",
									"});",
									"",
									"",
									"pm.test(\"_id is a non-empty string\", function () {",
									"    const responseData = pm.response.json();",
									"    ",
									"    pm.expect(responseData._id).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, \"Value should not be empty\");",
									"});",
									"",
									"",
									"pm.test(\"notic_name is a non-empty string\", function () {",
									"    const responseData = pm.response.json();",
									"    ",
									"    pm.expect(responseData.notic_name).to.be.a('string').and.to.have.lengthOf.at.least(1, \"Value should not be empty\");",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/notic/one/festival",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"notic",
								"one",
								"festival"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Event",
			"item": [
				{
					"name": "Event Delete",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful DELETE request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/event/delete/6618bf55e1564c7f95d56f34",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"event",
								"delete",
								"6618bf55e1564c7f95d56f34"
							]
						},
						"description": "This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code."
					},
					"response": []
				},
				{
					"name": "Event Create",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful POST request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 201]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						},
						{
							"listen": "prerequest",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"event_name\": \"new event\",\n    \"description\": \"Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959\",\n    \"date\": \"12 june 2032\",\n    \"thumbnail\": \"image.jpg\",\n    \"detail\": \"Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959. Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/event/create",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"event",
								"create"
							]
						},
						"description": "This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.\n\nA successful POST request typically returns a `200 OK` or `201 Created` response code."
					},
					"response": []
				},
				{
					"name": "Event Get",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 200\", function () {",
									"    pm.response.to.have.status(200);",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:6969/api/event/get",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"event",
								"get"
							]
						},
						"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
					},
					"response": []
				},
				{
					"name": "Event update",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Successful PUT request\", function () {",
									"    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						},
						{
							"listen": "prerequest",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"event_name\": \"eid\",\n    \"description\": \"Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959\",\n    \"date\": \"12 june 2032\",\n    \"thumbnail\": \"sdf.jpg\",\n    \"detail\": \"Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959. Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/event/update/6618bf62e1564c7f95d56f37",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"event",
								"update",
								"6618bf62e1564c7f95d56f37"
							]
						},
						"description": "This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code."
					},
					"response": []
				},
				{
					"name": "Event Get By Name",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Response status code is 200\", function () {",
									"  pm.expect(pm.response.code).to.equal(200);",
									"});",
									"",
									"",
									"pm.test(\"_id is a non-empty string\", function () {",
									"  const responseData = pm.response.json();",
									"  ",
									"  pm.expect(responseData._id).to.be.a('string').and.to.have.lengthOf.at.least(1, \"_id should not be empty\");",
									"});",
									"",
									"",
									"pm.test(\"Date is in a valid date format\", function () {",
									"    const responseData = pm.response.json();",
									"",
									"    pm.expect(responseData).to.be.an('object');",
									"    pm.expect(responseData.data.date).to.match(/^\\d{4}-\\d{2}-\\d{2}$/);",
									"});",
									"",
									"",
									"pm.test(\"Thumbnail is a valid URL format\", function () {",
									"  const responseData = pm.response.json();",
									"  ",
									"  pm.expect(responseData).to.be.an('object');",
									"  pm.expect(responseData.data).to.exist;",
									"  pm.expect(responseData.data.thumbnail).to.match(/^https?:\\/\\/\\w+(\\.\\w+)*(:[0-9]+)?(\\/.*)?$/, \"Thumbnail should be a valid URL format\");",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:6969/api/event/one/eid",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "6969",
							"path": [
								"api",
								"event",
								"one",
								"eid"
							]
						}
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "id",
			"value": "1"
		},
		{
			"key": "base_url",
			"value": "https://postman-rest-api-learner.glitch.me/"
		}
	]
}