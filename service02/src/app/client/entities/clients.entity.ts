import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    @Index('IDX_CLIENTS_NAME')
    name: string;

    @Column({ length: 255, unique: true })
    @Index('IDX_CLIENTS_EMAIL')
    email: string;

    @Column({ length: 20, nullable: true })
    phone: string;

    @Column({ length: 20, unique: true })
    @Index('IDX_CLIENTS_DOCUMENT')
    document: string;

    @Column({ type: 'text', nullable: true })
    address: string;

    @Column({ length: 100, nullable: true })
    city: string;

    @Column({ length: 2, nullable: true })
    state: string;

    @Column({ length: 10, nullable: true })
    zipCode: string;

    @Column({
        type: 'enum',
        enum: ['INDIVIDUAL', 'COMPANY'],
        default: 'INDIVIDUAL'
    })
    type: 'INDIVIDUAL' | 'COMPANY';

    @Column({ type: 'boolean', default: true })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 