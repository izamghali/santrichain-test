import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const url = `https://api-dev-konteks.santrichain.id/api/v1/catalogue`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatToIDR(amount: number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
}

export function truncateString(str: string, maxLength = 26) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
}

export function handleCheckboxChange(e: React.MouseEvent<HTMLButtonElement>, setState: React.Dispatch<React.SetStateAction<string[]>>) {
    const target = e.target as HTMLButtonElement;
    const checked = target.ariaChecked
    const value = target.value

    if (checked != 'true') {
        setState((prev) => [ ...prev, value ])
    } else {
        setState((prev) => [ ...prev.filter(item => item != value) ])
    }
}