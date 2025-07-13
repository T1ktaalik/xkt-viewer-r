import type { NextFetchEvent, NextRequest } from 'next/server'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { NextApiRequest, NextApiResponse } from "next"
import { Sha256 } from "@aws-crypto/sha256-browser"
import { Hash } from "@aws-sdk/hash-node"



    const s3Client: any = new S3Client({
    region: process.env.S3REGION,
    endpoint: process.env.S3ENDPOINTURL,
    credentials: {
        accessKeyId: process.env.S3ID,
        secretAccessKey: process.env.S3KEY
    }
})

console.log(s3Client )

const url = await getSignedUrl(s3Client, CopyObjectCommand, { expiresIn: 3600})
/* console.log(s3client) */
export function middleware(/* req: NextRequest, ev: NextFetchEvent */) {
  // Middleware logic
/*   console.log(process.env.S3ID)
  console.log('xoxo') */
}