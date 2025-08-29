import { z } from 'zod'
export const UrlParamsSchema = z.object({
  perspective_camera: z.object({
    camera_view_point: z.object({
      x: z.coerce.number(),
      y: z.coerce.number(),
      z: z.coerce.number()
    }),
    camera_direction: z.object({
      x: z.coerce.number(),
      y: z.coerce.number(),
      z: z.coerce.number()
    }),
    camera_up_vector: z.object({
      x: z.coerce.number(),
      y: z.coerce.number(),
      z: z.coerce.number()
    }),
    field_of_view: z.coerce.number()
  }),
  //lines: z.array(z.any()),
/*   bitmaps: z.any().optional(),
  clipping_planes: z.any().optional(),
  snapshot: z.object({
    snapshot_type: z.string(),
    snapshot_data: z.string().optional()
  }).optional(), */
  components: z.object({
    
  })
})

