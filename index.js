const { ECSClient, UpdateServiceCommand } = require('@aws-sdk/client-ecs');

const ecs = new ECSClient();

exports.handler = async (event, context) => {
    const cluster = event.CLUSTER;
    const service = event.SERVICE;
    
    try {
        const response = await ecs.send(new UpdateServiceCommand({
            cluster: cluster,
            service: service,
            forceNewDeployment: true
        }));
        return {
            statusCode: 200,
            body: "OK"
        };
    } catch (err) {
        console.log(err);
    }
};