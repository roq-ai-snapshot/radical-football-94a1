import * as yup from 'yup';
import { parentRequestValidationSchema } from 'validationSchema/parent-requests';

export const playerValidationSchema = yup.object().shape({
  skills: yup.string(),
  performance: yup.string(),
  training_progress: yup.string(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  parent_request: yup.array().of(parentRequestValidationSchema),
});
