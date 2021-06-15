@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-xs">
            <a name="" id="" class="btn btn-primary m-2" href="{{route('todos.create')}}" role="button">Ajouter une to do</a>
        </div>
        <div class="col-xs">
            @if (Route::currentRouteName() == 'todos.index')
            <a name="" id="" class="btn btn-warning m-2" href="{{route('todos.undone')}}" role="button">Voir les to do ouvertes</a>
        </div>
        <div class="col-xs">
            <a name="" id="" class="btn btn-success m-2" href="{{route('todos.done')}}" role="button">Voir les to do terminées</a>
        @elseif (Route::currentRouteName() == 'todos.done')
            <a name="" id="" class="btn btn-dark m-2" href="{{route('todos.index')}}" role="button">Toutes les to do</a>
        </div>
        <div class="col-xs">
            <a name="" id="" class="btn btn-warning m-2" href="{{route('todos.undone')}}" role="button">Voir les to do ouvertes</a>
        @elseif (Route::currentRouteName() == 'todos.undone')
            <a name="" id="" class="btn btn-dark m-2" href="{{route('todos.index')}}" role="button">Toutes les to do</a>
        </div>
        <div class="col-xs">
            <a name="" id="" class="btn btn-success m-2" href="{{route('todos.done')}}" role="button">Voir les to do terminées</a>
        @endif
        </div>
    </div>
</div>

@foreach ($datas as $data)
<div class="alert alert-{{$data->done ? 'success' : 'warning'}}" role="alert">
    <div class="row">
        <div class="col-sm">

            @foreach ($datas as $data)
            {{$data->description}}
            @endforeach

            <?=dd($datas)?>

            <details>
                <summary>
                    <strong>{{$data->name}} @if($data->done)<span class="badge badge-success">Done</span>@endif</strong>
                </summary>
                <p>{{$data->description}}</p>
            </details>
        </div>
        <div class="col-sm form-inline justify-content-end my-1">
            {{-- Button done/undone--}}
            @if ($data->done == 0)
            <form action="{{route('todos.makedone', $data->id)}}" method="POST">
                @csrf
                @method('PUT')
                <button type="submit" class="btn btn-success mx-1" style="min-width: 90px">Done</button>
            </form>
            @else
            <form action="{{route('todos.makeundone', $data->id)}}" method="POST">
                @csrf
                @method('PUT')
                <button type="submit" class="btn btn-warning mx-1" style="min-width: 90px">Undone</button>
            </form>
            @endif
            {{-- Button edit--}}
            <a name="" id="" class="btn btn-info mx-1" href="{{route('todos.edit', $data->id)}}" role="button" style="min-width: 90px">Editer</a>
            {{-- Button delete --}}
            <form action="{{route('todos.destroy', $data->id)}}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger mx-1" style="min-width: 90px">Delete</button>
            </form>
        </div>
    </div>
</div>
@endforeach

{{$datas->links()}}

@endsection