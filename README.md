## Test outputs

```
norman$ node with
withAwaitInReturn start
dump after called
[WTF Node?] open handles:
- File descriptors: (note: stdio always exists)
  - fd 1 (tty) (stdio)
- Timers:
  - (1 ~ 1 undefined) settle @ [path masked out]/delay/index.js:41
withAwait finished with result: { a: 1, b: 2 }
dump at finish
[WTF Node?] open handles:
- File descriptors: (note: stdio always exists)
  - fd 1 (tty) (stdio)


norman$ node without
withoutAwaitInReturn start
dump after called
[WTF Node?] open handles:
- File descriptors: (note: stdio always exists)
  - fd 1 (tty) (stdio)
- Timers:
  - (1 ~ 1 undefined) settle @ [path masked out]/delay/index.js:41
withoutAwait finished with result: { a: 1, b: 2 }
dump at finish
[WTF Node?] open handles:
- File descriptors: (note: stdio always exists)
  - fd 1 (tty) (stdio)

```