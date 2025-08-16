import { z } from 'zod'
export const UrlParamsSchema = z.object({
   perspective_camera: {
    camera_view_point: {
        x: z.number(),
        y: z.number(),
        z: z.number()
    },
    camera_direction: {
        x: z.number(),
        y: z.number(),
        z: z.number() 
    }, 
    camera_up_vector: {
        x: z.number(),
        y: z.number(),
        z: z.number() 
    }, 
    field_of_view: z.number()
   },
   lines: z.array(),
   b
})