import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client: any = new S3Client({
    region: process.env.S3REGION,
    endpoint: process.env.S3ENDPOINTURL,
    credentials: {
        accessKeyId: process.env.S3ID,
        secretAccessKey: process.env.S3KEY
    }
})

const input = {
     Bucket: process.env.S3BUCKET,
    Key: 'esp/data/projects/index.json'
}
const command = new GetObjectCommand(input)

export async function GET(/* req: Request */) {
    const url = await getSignedUrl(s3Client, command, {expiresIn: 3600})
    return Response.json({url: url})

}