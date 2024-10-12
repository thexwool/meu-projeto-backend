# Back-end

Link Frontend: https://github.com/thexwool/meu-projeto-frontend

Link Backend: https://github.com/thexwool/meu-projeto-backend

Siga as instruções abaixo para clonar, configurar e executar o projeto em sua máquina local.

1. **Crie uma nova pasta** para o projeto e abra o terminal nessa pasta.

2. **Clone o repositório do backend**:
    ```bash
    git clone https://github.com/thexwool/meu-projeto-backend.git
    ```

3. **Acesse a pasta do backend** e instale as dependências:
    ```bash
    cd meu-projeto-backend
    npm install
    cd ..
    ```

4. **Clone o repositório do frontend**:
    ```bash
    git clone https://github.com/thexwool/meu-projeto-frontend.git
    ```

5. **Acesse a pasta do frontend** e instale as dependências:
    ```bash
    cd meu-projeto-frontend
    npm install
    cd ..
    ```

6. **Abra o projeto no VSCode**:
    ```bash
    code .
    ```

7. **Configure os terminais no VSCode**:
    - Abra o terminal integrado (`Ctrl + \`` ou vá em **View > Terminal**).
    - Pressione `Ctrl + Shift + 5` para dividir o terminal em dois.

8. **Inicie o backend e o frontend**:
    - **No primeiro terminal**, execute:
        ```bash
        cd meu-projeto-backend
        node server
        ```
    - **No segundo terminal**, execute:
        ```bash
        cd meu-projeto-frontend
        npm run serve
        ```

9. **Acesse a aplicação** abrindo o link que aparecerá no terminal do frontend (geralmente `http://localhost:8080`) em seu navegador.

**Desenvolvido por [Allan Moreira](https://github.com/thexwool)**
