
import * as Yup from 'yup';

const EatWell = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    image: Yup.string().url().required('Required'),
    price: Yup.number()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

});

export default EatWell