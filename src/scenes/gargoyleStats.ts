export interface LodTierStat {
  tier: 'HIGH' | 'MID' | 'LOW'
  url: string
  tris: number
  verts: number
  bytes: number
}

export const LOD_STATS: LodTierStat[] = [
  { tier: 'HIGH', url: '/models/gargoyle-statue.glb', tris: 840_623, verts: 447_989, bytes: 4_800_000 },
  { tier: 'MID', url: '/models/gargoyle-statue-mid.glb', tris: 306_525, verts: 174_725, bytes: 2_100_000 },
  { tier: 'LOW', url: '/models/gargoyle-statue-low.glb', tris: 100_120, verts: 61_409, bytes: 968_000 },
]
