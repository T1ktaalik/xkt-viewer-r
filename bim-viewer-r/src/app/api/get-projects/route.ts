import { GetObjectCommand, ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3'
const s3Client: any = new S3Client({
    region: process.env.S3REGION,
    endpoint: process.env.S3ENDPOINTURL,
    credentials: {
        accessKeyId: process.env.S3ID,
        secretAccessKey: process.env.S3KEY
    }
})


export async function GET(/* req: Request */) {

console.log(s3Client)


    console.log('the API!!!!')
    return Response.json({ message: "Hello"})
}