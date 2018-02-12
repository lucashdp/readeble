import React, { Component } from 'react';
import DeletePostModal from './DeletePostModal';

export default function Card({ post }) {
    return (
        <div>
            <div class="card blue darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{post.title}</span>
                    <p>{post.body}</p>
                </div>
                <div class="card-action">
                    <a className="white-text" href="#">Votar</a>
                    <a className="white-text" href="#">Comentar</a>
                    <DeletePostModal postId={post.id} />
                </div>
            </div>
        </div>
    );
}