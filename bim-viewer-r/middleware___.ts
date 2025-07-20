// you/d be interested to read https://dev.to/codeparrot/nextjs-middleware-simple-guide-to-control-requests-554p?ysclid=md920ek2k5145959092
//https://nextjs.org/blog/building-apis-with-nextjs
//https://dev.to/refine/nextjs-134s-server-actions-and-data-fetching-n3m?ysclid=md92hdfttc466210859
import type { NextFetchEvent, NextRequest } from 'next/server'
import { GetObjectCommand, ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { NextApiRequest, NextApiResponse } from "next"
import { Sha256 } from "@aws-crypto/sha256-browser"
import { Hash } from "@aws-sdk/hash-node"

/*     const s3Client: any = new S3Client({
    region: process.env.S3REGION,
    endpoint: process.env.S3ENDPOINTURL,
    credentials: {
        accessKeyId: process.env.S3ID,
        secretAccessKey: process.env.S3KEY
    }
})

console.log(s3Client )

const input = {
  Bucket: process.env.S3BUCKET,  
}

const listObjects = new ListObjectsV2Command(input)
const url = await getSignedUrl(s3Client, listObjects, { expiresIn: 3600})


function getProjects( dataDir: string, ) {

}

function getProject() {

}

function getGeometry() {

}

export const config = {
  matcher: "/"
} */


