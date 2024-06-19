import React, { useState, useEffect } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts when component mounts
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Posts!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2'>
                            <PostCard {...post} /> 
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
