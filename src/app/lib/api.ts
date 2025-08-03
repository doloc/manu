import axios from 'axios';

export const fetchPosts = async (type: 'NEWS' | 'EVENT', from = 0, count = 6) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const gameId = process.env.NEXT_PUBLIC_GAME_ID;
  const url = `${baseUrl}/post?gameId=${gameId}&type=${type}&from=${from}&count=${count}&public=true`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchPostDetail = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const gameId = process.env.NEXT_PUBLIC_GAME_ID;
  const url = `${baseUrl}/post?postId=${id}&gameId=${gameId}&public=true`;
  const response = await axios.get(url);
  return response.data;
};