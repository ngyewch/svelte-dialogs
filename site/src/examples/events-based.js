export const eventsBased = {
  name: "Events based",
  id: 6,
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: `
        <script>
        import { Dialog } from "svelte-dialogs";
      
        let dialog;
      
        function handler(event) {
          // event.type 'hide' have event.detail === "my data"
          console.log(event.type, event.detail);
        }
      </script>
      
      <h2>In-component events-based</h2>
      <button on:click={() => dialog.open("my data")}>show</button>
      <Dialog
        bind:this={dialog}
        on:show={handler}
        on:shown={handler}
        on:hide={handler}
        on:hidden={handler}
        let:data
        let:close
      >
        <p>template based dialog</p>
        <p>{data}</p>
        <button on:click={() => close(data)}>close</button>
      </Dialog>
      
    `,
    },
  ],
};