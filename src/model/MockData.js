const confirmStatus = "C"
const pendingStatus = "P"

import { COLORS, icons } from '../constants';

export const VALORES_CONTA = [
    {id: 1,  status: true, valor: '1841', desc: 'Corrected Value', valorCircular: 1},
    {id: 2,  status: false, valor: '-741', desc: 'Pending Amount', valorCircular: 1},
    {id: 3,  status: true, valor: '1001', desc: 'Benefits', valorCircular: 1},
    {id: 4,  status: true, valor: '490', desc: 'Corrected Value', valorCircular: 1},
    {id: 5,  status: false, valor: '-1000', desc: 'To Compensate', valorCircular: 1},
    {id: 6,  status: true, valor: '3785', desc: 'Debit Card', valorCircular: 1},
    {id: 7,  status: true, valor: '2200', desc: 'Corrected Value', valorCircular: 1},
    {id: 8,  status: false, valor: '-1730', desc: 'Corrected Value', valorCircular: 1},
]

export const VALORES_CONTA_EDITADO = [
    {id: 1,  status: true, valor: '1841', desc: 'Corrected Value', valorCircular: 90},
    {id: 2,  status: false, valor: '-741', desc: 'Pending Amount', valorCircular: 30},
    {id: 3,  status: true, valor: '1001', desc: 'Benefits', valorCircular: 80},
    {id: 4,  status: true, valor: '490', desc: 'Corrected Value', valorCircular: 50},
    {id: 5,  status: false, valor: '-1000', desc: 'To Compensate', valorCircular: 30},
    {id: 6,  status: true, valor: '3785', desc: 'Debit Card', valorCircular: 40},
    {id: 7,  status: true, valor: '2200', desc: 'Corrected Value', valorCircular: 10},
    {id: 8,  status: false, valor: '-1730', desc: 'Corrected Value', valorCircular: 80},
]

export const categoriesData = [
    {
        id: 1,
        name: "Educação",
        icon: icons.pin,
        color: COLORS.gold2,
        expenses: [
            {
                id: 1,
                title: "Mensalidade",
                description: "Mensalidade",
                location: "Jupiter' tuition center",
                total: 100.00,
                status: pendingStatus
            },
            {
                id: 2,
                title: "Arduino",
                description: "Hardward",
                location: "Jupiter' tuition center",
                total: 30.00,
                status: pendingStatus
            },
            {
                id: 3,
                title: "Course de Javascript",
                description: "Course de Javascript",
                location: "Jupiter' Book Store",
                total: 20.00,
                status: confirmStatus
            },
            {
                id: 4,
                title: "Boock de Java",
                description: "Boock de Java",
                location: "Jupiter' Book Store",
                total: 10.00,
                status: confirmStatus
            }
        ],
    },
    {
        id: 2,
        name: "Nutrição",
        icon: icons.back,
        color: COLORS.gold4,
        expenses: [
            {
                id: 5,
                title: "Vitaminas",
                description: "Vitaminas",
                location: "Jupiter' Pharmacy",
                total: 25.00,
                status: pendingStatus,
            },

            {
                id: 6,
                title: "Proteína em pó",
                description: "Proteína em pó",
                location: "Jupiter' Pharmacy",
                total: 50.00,
                status: confirmStatus,
            },

        ],
    },
    {
        id: 3,
        name: "Filho",
        icon: icons.close_icon,
        color: COLORS.gold3,
        expenses: [
            {
                id: 7,
                title: "brinquedos",
                description: "brinquedos",
                location: "Jupiter' Loja de brinquedos",
                total: 25.00,
                status: confirmStatus,
            },
            {
                id: 8,
                title: "Cadeirinha de bebê",
                description: "Cadeirinha de bebê",
                location: "Jupiter' Baby Care Store",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 9,
                title: "Pampers",
                description: "Pampers",
                location: "Jupiter' Supermarket",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 10,
                title: "Camiseta de bebê",
                description: "Camiseta de bebê",
                location: "Jupiter' Fashion Store",
                total: 20.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 4,
        name: "Lazer",
        icon: icons.left_arrow,
        color: COLORS.gold5,
        expenses: [
            {
                id: 11,
                title: "Produto de cuidados da pele",
                description: "Cuidados com a pele",
                location: "Jupiter' Pharmacy",
                total: 10.00,
                status: pendingStatus,
            },
            {
                id: 12,
                title: "Loção",
                description: "Loção",
                location: "Jupiter' Pharmacy",
                total: 70.00,
                status: confirmStatus,
            },
            {
                id: 13,
                title: "Máscara de rosto",
                description: "Máscara de rosto",
                location: "Jupiter' Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
            {
                id: 14,
                title: "Sunscreen cream",
                description: "Sunscreen cream",
                location: "Jupiter' Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
        ],
    },
]
