export const portableTextComponents = {
  marks: {
    sup: ({children}: {children: React.ReactNode}) => <sup>{children}</sup>,
    indented: ({children}: {children: React.ReactNode}) => (
      <span style={{ whiteSpace: 'pre-wrap', paddingLeft: '2em' }}>{children}</span>
    ),
  },
};