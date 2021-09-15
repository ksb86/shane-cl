# usage
### useAxios
    import { useAxios } from 'shane-cl';
    ...
    const { request, pending, error, data } = useAxios();
    ...
    request({
        method: 'get',
        url: '/api/hello',
    });
    ...
    <div>{pending ? 'loading' : null}</div>
    <div>{data?.value ? data.value : null}</div>

### Button
    import { Button } from 'shane-cl';
    ...
    <Button onClick={clickHandler}>Button Text</Button>


# dev
```
shane-cl$ yarn link

my-app$ yarn link shane-cl
my-app$ cd node_modules/react; yarn link;
my-app$ cd node_modules/react-dom; yarn link;
my-app$ cd node_modules/axios; yarn link;

shane-cl$ yarn link react; yarn link react-dom; yarn link axios;
shane-cl$ yarn dev

my-app$ yarn dev