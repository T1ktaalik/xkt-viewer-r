import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { NextApiRequest, NextApiResponse } from "next"

export interface GetFileProps {
    url: string
}

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const s3client = new S3Client({
        
    })
}