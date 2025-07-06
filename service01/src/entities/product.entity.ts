import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    @Index()
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ length: 50, unique: true })
    @Index()
    sku: string;

    @Column({ length: 50, nullable: true })
    category: string;

    @Column({ type: 'int', default: 0 })
    minimumStock: number;

    @Column({ type: 'boolean', default: true })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 