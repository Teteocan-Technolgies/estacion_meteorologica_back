import z from 'zod';

const anomaliaSchema = z.object({
    warning: z.number(),
    danger: z.number(),
})

export function validateAnomalia(input){
    return anomaliaSchema.safeParse(input);
}

export function validatePartialAnommalia(input){{
    return anomaliaSchema.partial().safeParse(input);
}}