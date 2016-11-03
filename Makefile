PACKAGE := build/release/helloworld.zip
KLOUDFORMER := docker run \
	--rm \
	-v ${PWD}/cloudformation:/app/cloudformation \
	-e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
	-e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
	linn/kloudformer

.PHONY: clean undeploy deploy package test

test:
	npm test

clean:
	-rm ${PACKAGE}

${PACKAGE}: clean
	grunt zip

deploy: ${PACKAGE} | undeploy
	@aws s3 cp ${PACKAGE} s3://linn.lambdas/helloworld.zip 
	@$(KLOUDFORMER) create \
		-n lambda-testing \
		-t ./cloudformation/lambda.json

undeploy:
	@$(KLOUDFORMER) destroy \
		-n lambda-testing \
		-w \
		-t ./cloudformation/lambda.json