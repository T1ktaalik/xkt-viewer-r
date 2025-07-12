import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { NextApiRequest, NextApiResponse } from "next"
import { Sha256 } from "@aws-crypto/sha256-browser"
import { Hash } from "@aws-sdk/hash-node"
//https://www.skypack.dev/view/aws-s3-config

export interface GetFileProps {
    url: string
}

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
/*     const s3client = new S3Client({
    region: process.env.S3REGION,
    endpoint: process.env.S3ENDPOINTURL,
    credentials: {
        accessKeyId: process.env.S3ID,
        secretAccessKey: process.env.S3KEY
    }
}) */
}