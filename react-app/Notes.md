## Ciclo de vida 

### componentWillMount

O hook _useLayoutEffect_, ele com o array vazio atua como o `componentWillMount`. É usado quando você precisa mudar algo visualmente antes do componente aparecer, para que não haja aquele problema da tela piscar assim que a tela carrega, um bom exemplo disso atualmente é a mudança de temas para light/dark.

```
 useLayoutEffect(() => {
    …
  },[])
```

### componentDidMount
O _useEffect_ com o array de dependências vazio atua como o `componentDidMount`. Ele executa assim que o componente é renderizado, normalmente é utilizado para fazer chamadas para o servidor ou fazer algum cálculo com props passados.
```
 useEffect(() => {
    …
  }, [])
```

### componentWillUpdate
O `componentWillUpdate` pode ser feito tanto pelo _useLayoutEffect_ quanto pelo _useEffect_, desde que tenha uma variável no array de dependências e, à partir da primeira execução, os 2 atuarão como `componentWillUpdate`, sempre executando quando essa variável mudar.

```
 useEffect(() => {
    …
  }, [variavel])
```

### componentWillUnmount
Diferente do que muitas pessoas pensam, também existe a representação do `componentWillUnmount` em hooks, que é retornar uma função dentro do _useEffect_! dessa forma essa função dentro do return só será executada quando o componente estiver desmontando. É bastante usado para clearTimeout, clearInterval ou para enviar informações de acesso daquele componente para outro lugar.

```
useEffect(() => {
  return () => {
    …
  }
},[])

```
