PACKAGE := build/release/helloworld.zip

.PHONY: clean undeploy deploy package test

test:
	npm test

clean:
	-rm ${PACKAGE}

${PACKAGE}: clean test
	grunt zip

deploy: ${PACKAGE} | undeploy
	@aws s3 cp ${PACKAGE} s3://linn.lambdas/helloworld.zip
	@aws cloudformation create-stack --stack-name lambda-testing --capabilities=CAPABILITY_IAM --template-body file://./cloudformation/lambda.json
	
undeploy:
	@aws cloudformation delete-stack --stack-name lambda-testing