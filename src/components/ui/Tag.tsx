interface TagProps {
  label: string;
  size?: 'sm' | 'md';
}

export default function Tag({ label, size = 'sm' }: TagProps) {
  return (
    <span
      className={`tag ${
        size === 'md' ? 'text-xs px-3 py-1' : 'text-xs px-2.5 py-0.5'
      }`}
    >
      {label}
    </span>
  );
}
