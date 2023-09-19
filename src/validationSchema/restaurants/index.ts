import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  hours_of_operation: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
