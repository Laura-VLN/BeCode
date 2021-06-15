@extends('layouts.app')

@section('content')
    <h1>{{ $post->title}}</h1>
    <p>{{ $post->content }}</p>
    <span>{{ $post->image ? $post->image->path : 'Pas d\'image.' }}</span>

    <hr>
    @forelse($post->comments as $comment)
        <div>{{ $comment->content }} | créé le {{ $comment->created_at->format('d.m.Y') }}</div>
    @empty
        <span>Aucun commentaire pour ce post.</span>
    @endforelse
    <hr>
    @forelse($post->tags as $tag)
        <span>{{ $tag->name }}</span>
    @empty
        <span>Aucun tag pour ce post.</span>
    @endforelse
@endsection