import axios from 'axios';

const url = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

export default async (params: {
  name: string;
  email: string;
}): Promise<any> => axios({
  method: 'post',
  url,
  data: params,
});
