@import "blog/prismjs/plugins/toolbar/prism-toolbar.css";

{{ range $.Site.Params.prism.languages }}
  import "prismjs/components/prism-{{ . }}";
{{ end }}

{{ range $.Site.Params.prism.plugins }}
  import "prismjs/plugins/{{ . }}/prism-{{ . }}";
{{ end }}

Prism.highlightAll();
